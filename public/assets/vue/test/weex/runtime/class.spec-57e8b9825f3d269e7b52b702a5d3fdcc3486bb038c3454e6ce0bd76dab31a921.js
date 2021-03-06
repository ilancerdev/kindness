import { getRoot, fireEvent, compileAndExecute } from '../helpers/index'

describe('generate class', () => {
  it('should be generated', () => {
    compileAndExecute(`
      <div>
        <text class="a b c">Hello World</text>
      </div>
    `, `
      style: {
        a: { fontSize: '100' },
        b: { color: '#ff0000' },
        c: { fontWeight: 'bold' }
      }
    `).then(instance => {
      expect(getRoot(instance)).toEqual({
        type: 'div',
        children: [{
          type: 'text',
          classList: ['a', 'b', 'c'],
          attr: { value: 'Hello World' }
        }]
      })
    })
  })

  it('should be updated', (done) => {
    compileAndExecute(`
      <div @click="foo">
        <text :class="['a', x]">Hello World</text>
      </div>
    `, `
      data: { x: 'b' },
      style: {
        a: { fontSize: '100' },
        b: { color: '#ff0000' },
        c: { fontWeight: 'bold' },
        d: {
          color: '#0000ff',
          fontWeight: 'bold'
        }
      },
      methods: {
        foo: function () {
          this.x = 'd'
        }
      }
    `).then(instance => {
      expect(getRoot(instance)).toEqual({
        type: 'div',
        event: ['click'],
        children: [{
          type: 'text',
          classList: ['a', 'b'],
          attr: { value: 'Hello World' }
        }]
      })
      fireEvent(instance, '_root', 'click')
      return instance
    }).then(instance => {
      expect(getRoot(instance)).toEqual({
        type: 'div',
        event: ['click'],
        children: [{
          type: 'text',
          classList: ['a', 'd'],
          attr: { value: 'Hello World' }
        }]
      })
      done()
    })
  })

  it('should be applied in order', (done) => {
    compileAndExecute(`
      <div @click="foo">
        <text :class="arr">Hello World</text>
      </div>
    `, `
      data: {
        arr: ['b', 'a']
      },
      style: {
        a: { color: '#ff0000' },
        b: { color: '#00ff00' },
        c: { color: '#0000ff' }
      },
      methods: {
        foo: function () {
          this.arr.push('c')
        }
      }
    `).then(instance => {
      expect(getRoot(instance)).toEqual({
        type: 'div',
        event: ['click'],
        children: [{
          type: 'text',
          classList: ['b', 'a'],
          attr: { value: 'Hello World' }
        }]
      })
      fireEvent(instance, '_root', 'click')
      return instance
    }).then(instance => {
      expect(getRoot(instance)).toEqual({
        type: 'div',
        event: ['click'],
        children: [{
          type: 'text',
          classList: ['b', 'a', 'c'],
          attr: { value: 'Hello World' }
        }]
      })
      done()
    })
  })

  it('should be cleared', (done) => {
    compileAndExecute(`
      <div @click="foo">
        <text :class="['a', x]">Hello World</text>
      </div>
    `, `
      data: { x: 'b' },
      style: {
        a: { fontSize: '100' },
        b: { color: '#ff0000' },
        c: { fontWeight: 'bold' }
      },
      methods: {
        foo: function () {
          this.x = 'c'
        }
      }
    `).then(instance => {
      expect(getRoot(instance)).toEqual({
        type: 'div',
        event: ['click'],
        children: [{
          type: 'text',
          classList: ['a', 'b'],
          attr: { value: 'Hello World' }
        }]
      })
      fireEvent(instance, '_root', 'click')
      return instance
    }).then(instance => {
      expect(getRoot(instance)).toEqual({
        type: 'div',
        event: ['click'],
        children: [{
          type: 'text',
          classList: ['a', 'c'],
          attr: { value: 'Hello World' }
        }]
      })
      done()
    })
  })
})
;

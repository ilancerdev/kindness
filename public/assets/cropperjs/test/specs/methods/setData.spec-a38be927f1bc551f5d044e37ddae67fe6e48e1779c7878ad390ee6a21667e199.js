describe("setData (method)",()=>{it("should change the positions only",e=>{const t=window.createImage(),a=new Cropper(t,{ready(){const t=a.getData(),o=a.setData({x:1,y:1}).getData();expect(o.x).to.not.equal(t.x),expect(o.y).to.not.equal(t.y),expect(o.width).to.equal(t.width),expect(o.height).to.equal(t.height),e()}})}),it("should change the positions only",e=>{const t=window.createImage(),a=new Cropper(t,{ready(){const t=a.getData(),o=a.setData({width:160,height:90}).getData();expect(o.x).to.equal(t.x),expect(o.y).to.equal(t.y),expect(o.width).to.not.equal(t.width),expect(o.height).to.not.equal(t.height),e()}})}),it("should change the rotate degrees",e=>{const t=window.createImage(),a=new Cropper(t,{ready(){const t=a.getData(),o=a.setData({rotate:90}).getData();expect(o.rotate).to.not.equal(t.rotate),e()}})}),it("should change the scale in both x-axis and y-axis",e=>{const t=window.createImage(),a=new Cropper(t,{ready(){const t=a.getData(),o=a.setData({scaleX:-1,scaleY:-1}).getData();expect(o.scaleX).to.not.equal(t.scaleX),expect(o.scaleY).to.not.equal(t.scaleY),e()}})})});
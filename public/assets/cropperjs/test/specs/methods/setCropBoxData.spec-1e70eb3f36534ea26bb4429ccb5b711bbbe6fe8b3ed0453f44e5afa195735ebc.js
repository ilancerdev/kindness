describe("setCropBoxData (method)",()=>{it("should change the positions only",t=>{const e=window.createImage(),o=new Cropper(e,{ready(){const e=o.getCropBoxData(),a=o.setCropBoxData({left:16,top:9}).getCropBoxData();expect(a.left).to.not.equal(e.left),expect(a.top).to.not.equal(e.top),expect(a.width).to.equal(e.width),expect(a.height).to.equal(e.height),t()}})}),it("should change the sizes only",t=>{const e=window.createImage(),o=new Cropper(e,{ready(){const e=o.getCropBoxData(),a=o.setCropBoxData({width:320,height:180}).getCropBoxData();expect(a.left).to.equal(e.left),expect(a.top).to.equal(e.top),expect(a.width).to.not.equal(e.width),expect(a.height).to.not.equal(e.height),t()}})})});
describe("autoCropArea (option)",()=>{it("should be 80% by default",e=>{const t=window.createImage(),o=new Cropper(t,{ready(){const t=o.getCanvasData(),a=o.getCropBoxData();expect(.8*t.width).to.equal(a.width),expect(.8*t.height).to.equal(a.height),e()}});expect(o.options.autoCropArea).to.equal(.8)}),it("should be 100%",e=>{const t=window.createImage(),o=new Cropper(t,{autoCropArea:1,ready(){const t=o.getCanvasData(),a=o.getCropBoxData();expect(t.width).to.equal(a.width),expect(t.height).to.equal(a.height),e()}});expect(o.options.autoCropArea).to.equal(1)})});
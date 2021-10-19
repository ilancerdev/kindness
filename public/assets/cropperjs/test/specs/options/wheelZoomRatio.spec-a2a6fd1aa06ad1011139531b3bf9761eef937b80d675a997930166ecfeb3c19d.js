describe("wheelZoomRatio (option)",()=>{it("should be `0.1` by default",e=>{const t=window.createImage(),a=new Cropper(t,{ready(){const t=a.getCanvasData(),o=window.createEvent("wheel");o.deltaY=-1,a.cropper.dispatchEvent(o),expect(1.1*t.width).to.equal(a.getCanvasData().width),e()}});expect(a.options.wheelZoomRatio).to.equal(.1)}),it("should match the given zoom ratio",e=>{const t=window.createImage(),a=.2,o=new Cropper(t,{wheelZoomRatio:a,ready(){const t=o.getCanvasData(),i=window.createEvent("wheel");i.deltaY=-1,o.cropper.dispatchEvent(i),expect(t.width*(1+a)).to.equal(o.getCanvasData().width),e()}});expect(o.options.wheelZoomRatio).to.equal(a)})});
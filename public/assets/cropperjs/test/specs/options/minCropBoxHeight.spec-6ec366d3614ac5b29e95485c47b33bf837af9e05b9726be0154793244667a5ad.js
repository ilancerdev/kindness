describe("minCropBoxHeight (option)",()=>{it("should be `0` by default",()=>{const e=window.createImage(),o=new Cropper(e);expect(o.options.minCropBoxHeight).to.equal(0)}),it("should match the given minimum size",e=>{const o=window.createImage(),t=150,i=new Cropper(o,{minCropBoxHeight:t,ready(){const o=i.setCropBoxData({height:100}).getCropBoxData();expect(o.height).to.equal(t),e()}});expect(i.options.minCropBoxHeight).to.equal(t)})});
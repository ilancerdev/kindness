describe("getCropBoxData (method)",()=>{it("should get an empty object when it is not ready",()=>{const e=window.createImage(),t=new Cropper(e).getCropBoxData();expect(t).to.be.an("object").that.is.empty}),it("should get expect crop box data when ready",e=>{const t=window.createImage(),o=new Cropper(t,{ready(){const t=o.getCropBoxData();expect(t).to.be.an("object").that.has.all.keys(["left","top","width","height"]),expect(t.left).to.be.a("number"),expect(t.top).to.be.a("number"),expect(t.width).to.be.a("number"),expect(t.height).to.be.a("number"),e()}})})});
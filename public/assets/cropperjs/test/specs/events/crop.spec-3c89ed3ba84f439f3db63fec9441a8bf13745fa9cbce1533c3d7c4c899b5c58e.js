describe("crop (event)",()=>{it("should trigger the `crop` event",e=>{const t=window.createImage();t.addEventListener("crop",t=>{expect(t.type).to.equal("crop"),e()}),new Cropper(t)}),it("should have expected properties in `event.detail`",e=>{const t=window.createImage();t.addEventListener("crop",t=>{expect(t.detail).to.be.an("object").that.has.all.keys(["x","y","width","height","rotate","scaleX","scaleY"]),expect(t.detail.x).to.be.a("number"),expect(t.detail.y).to.be.a("number"),expect(t.detail.width).to.be.a("number"),expect(t.detail.height).to.be.a("number"),expect(t.detail.rotate).to.be.a("number"),expect(t.detail.scaleX).to.be.a("number"),expect(t.detail.scaleY).to.be.a("number"),e()}),new Cropper(t)})});
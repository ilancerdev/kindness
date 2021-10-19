describe("getData (method)",()=>{const e={x:0,y:0,width:0,height:0,rotate:0,scaleX:1,scaleY:1};it("should get initial data when it is not ready",()=>{const t=window.createImage(),a=new Cropper(t);expect(a.getData()).to.deep.equal(e)}),it("should get initial data when it is not cropped",t=>{const a=window.createImage(),o=new Cropper(a,{autoCrop:!1,ready(){expect(o.cropped).to.be["false"],expect(o.getData()).to.deep.equal(e),t()}})}),it("should get data with expected properties",e=>{const t=window.createImage(),a=new Cropper(t,{ready(){const t=a.getData();expect(t).to.be.an("object").that.has.all.keys(["x","y","width","height","rotate","scaleX","scaleY"]),expect(t.x).to.be.a("number"),expect(t.y).to.be.a("number"),expect(t.width).to.be.a("number"),expect(t.height).to.be.a("number"),expect(t.rotate).to.be.a("number"),expect(t.scaleX).to.be.a("number"),expect(t.scaleY).to.be.a("number"),e()}})}),it("should get data with rounded property values",e=>{const t=window.createImage(),a=new Cropper(t,{ready(){const t=a.getData(!0);expect(t.x%1).to.equal(0),expect(t.y%1).to.equal(0),expect(t.width%1).to.equal(0),expect(t.height%1).to.equal(0),e()}})}),it("should not exceed the natural width/height after rounded",e=>{const t=window.createImage(),a=new Cropper(t,{viewMode:1,ready(){const t=a.getImageData(),o=155.5,r=155.5;a.setData({left:o,top:r,width:t.naturalWidth-o,height:t.naturalHeight-r});const c=a.getData(!0);expect(c.x+c.width).to.be.at.most(t.naturalWidth),expect(c.y+c.height).to.be.at.most(t.naturalHeight),e()}})})});
describe("highlight (option)",()=>{it("should show the highlight mask by default",e=>{const t=window.createImage(),o=new Cropper(t,{ready(){const t=o.cropper.querySelector(".cropper-face");expect(window.getComputedStyle(t).opacity).to.not.equal("0"),e()}});expect(o.options.highlight).to.be["true"]}),it("should not show the highlight mask",e=>{const t=window.createImage(),o=new Cropper(t,{highlight:!1,ready(){const t=o.cropper.querySelector(".cropper-face");expect(window.getComputedStyle(t).opacity).to.equal("0"),e()}});expect(o.options.highlight).to.be["false"]})});
describe("ready (option)",()=>{it("should be `null` be default",()=>{const e=window.createImage(),t=new Cropper(e);expect(t.options.ready).to.be["null"]}),it("should execute the `ready` hook function",e=>{const t=window.createImage(),o=new Cropper(t,{ready(t){expect(t.type).to.equal("ready"),e()}});expect(o.options.ready).to.be.a("function")}),it("should execute the `crop` hook function even though default prevented",e=>{const t=window.createImage();new Cropper(t,{ready(e){e.preventDefault()},crop(){e()}})})});
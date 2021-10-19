describe("cropmove (event)",()=>{const e=window.PointerEvent?"pointerdown":"mousedown",t=window.PointerEvent?"pointermove":"mousemove",n=window.PointerEvent?"pointerup":"mouseup";it("should trigger the `cropmove` event",o=>{const a=window.createImage();let d;a.addEventListener("ready",()=>{const{dragBox:o}=d;o.dispatchEvent(window.createEvent(e)),o.dispatchEvent(window.createEvent(t)),o.dispatchEvent(window.createEvent(n))}),a.addEventListener("cropmove",e=>{expect(e.detail.action).to.equal("crop"),o()}),d=new Cropper(a)}),it("should have expected properties in `event.detail`",o=>{const a=window.createImage();let d;a.addEventListener("ready",()=>{const{dragBox:o}=d;o.dispatchEvent(window.createEvent(e)),o.dispatchEvent(window.createEvent(t)),o.dispatchEvent(window.createEvent(n))}),a.addEventListener("cropmove",e=>{expect(e.detail).to.be.an("object").that.has.all.keys(["action","originalEvent"]),expect(e.detail.action).to.equal("crop"),expect(e.detail.originalEvent.type).to.equal(t),o()}),d=new Cropper(a)}),it("should not trigger the `crop` event when default prevented",o=>{const a=window.createImage();let d;a.addEventListener("ready",()=>{const{dragBox:o}=d;a.addEventListener("crop",()=>{expect.fail(1,0)}),o.dispatchEvent(window.createEvent(e)),o.dispatchEvent(window.createEvent(t)),o.dispatchEvent(window.createEvent(n))}),a.addEventListener("cropmove",e=>{e.preventDefault(),o()}),d=new Cropper(a)})});
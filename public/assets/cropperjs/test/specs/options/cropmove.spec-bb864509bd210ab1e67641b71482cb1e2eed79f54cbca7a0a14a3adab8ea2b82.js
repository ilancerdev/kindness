describe("cropmove (option)",()=>{const e=window.PointerEvent?"pointerdown":"mousedown",t=window.PointerEvent?"pointermove":"mousemove",o=window.PointerEvent?"pointerup":"mouseup";it("should be `null` be default",()=>{const e=window.createImage(),t=new Cropper(e);expect(t.options.cropmove).to.be["null"]}),it("should execute the `cropmove` hook function",n=>{const c=window.createImage(),i=new Cropper(c,{ready(){const{dragBox:n}=i;n.dispatchEvent(window.createEvent(e)),n.dispatchEvent(window.createEvent(t)),n.dispatchEvent(window.createEvent(o))},cropmove(e){expect(e.type).to.equal("cropmove"),expect(e.detail).to.be.an("object").that.has.all.keys(["action","originalEvent"]),expect(e.detail.action).to.equal("crop"),expect(e.detail.originalEvent.type).to.equal(t),n()}});expect(i.options.cropmove).to.be.a("function")}),it("should not execute the `crop` hook function when default prevented",n=>{const c=window.createImage(),i=new Cropper(c,{ready(){const{dragBox:n}=i;i.options.crop=(()=>{expect.fail(1,0)}),n.dispatchEvent(window.createEvent(e)),n.dispatchEvent(window.createEvent(t)),n.dispatchEvent(window.createEvent(o))},cropmove(e){e.preventDefault(),n()}})})});
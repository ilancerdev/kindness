describe("responsive (option)",()=>{it("should be responsive be default",e=>{const t=window.createImage(),n=new Cropper(t,{ready(){const i=n.getContainerData();let o=i.width-10,a=i.height-10;t.parentElement.style.width=`${o}px`,t.parentElement.style.height=`${a}px`,window.dispatchEvent(window.createEvent("resize"));let p=n.getContainerData();expect(p.width).to.equal(o),expect(p.height).to.equal(a),o=i.width+10,a=i.height+10,t.parentElement.style.width=`${o}px`,t.parentElement.style.height=`${a}px`,window.dispatchEvent(window.createEvent("resize")),p=n.getContainerData(),expect(p.width).to.equal(o),expect(p.height).to.equal(a),e()}});expect(n.options.responsive).to.be["true"]}),it("should not be responsive",e=>{const t=window.createImage(),n=new Cropper(t,{responsive:!1,ready(){const i=n.getContainerData(),o=i.width-10,a=i.height-10;t.parentElement.style.width=`${o}px`,t.parentElement.style.height=`${a}px`,window.dispatchEvent(window.createEvent("resize"));const p=n.getContainerData();expect(p.width).to.equal(i.width),expect(p.height).to.equal(i.height),e()}});expect(n.options.responsive).to.be["false"]})});
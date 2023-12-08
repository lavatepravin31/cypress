describe("tablr value",function(){

    it("test tabele data",function(){

        cy.visit("https://www.webdriveruniversity.com/")

        cy.get("#data-table").invoke("removeAttr","target").click();

       let userinfo=[] 
        let age=0

        cy.get("#thumbnail-1 td").each((ele,Index)=>{

       const  storetext=ele.text();

       if(storetext.includes("Woods")){


        cy.get("#thumbnail-1 td")

        .eq(Index)

        .next()

        .then(function (Assigneecolumn) {
            const Assigneetext = Assigneecolumn.text();
            expect(Assigneetext).to.contains('80');

       })
    }


        
    })
       


    })
})


describe("tablr value",function(){

    it("test tabele data",function(){

        cy.visit("https://www.webdriveruniversity.com/")

        cy.get("#data-table").invoke("removeAttr","target").click();

       let userinfo=[] 
        let age=0
        cy.get("#thumbnail-1 td").each((ele,Index)=>{

          userinfo[Index]  = ele.text()
        
        }).then(()=>{

            for(let i=0; i<userinfo.length; i++){
                if(Number(userinfo[i])){
                    age=age +Number(userinfo[i])
                }
            }

            cy.log(age)
            expect(age).to.eq(322)
        })
       


    })
})
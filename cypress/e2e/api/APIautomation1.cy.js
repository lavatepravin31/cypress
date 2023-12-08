

const url = "https://jsonplaceholder.typicode.com/"
describe("post request",()=>{

    it ("test post",()=>{

        cy.request({
            method:'POST',
            url:`${url}/posts`,
            body:{
                userID:2,
                title:"this is for api automation purpose"

            }
        }).then((POSTallResponse)=>{
            cy.log(POSTallResponse)
            expect(POSTallResponse.status).eq(201)
        })
    })
})
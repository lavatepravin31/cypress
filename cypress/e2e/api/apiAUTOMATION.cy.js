

const url = "https://jsonplaceholder.typicode.com/"

describe("GEt api call test",()=>{

    it("test get api response",()=>{

        cy.request('GET',`${url}/posts`).then((getResponse)=>{

            expect(getResponse.status).eq(200);
         
        })
    })


    it("test post api response",()=>{

        cy.request({
            method :'POST',
            url : `${url}/posts`,
            body :{

                userID:2,
                titel: "this for testing purpose"
            }
        }).then((postresponse)=>{
            expect(postresponse .status).eq(201)
        })
    })
})
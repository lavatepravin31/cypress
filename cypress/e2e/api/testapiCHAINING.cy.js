


describe("api chaining",()=>{

let id1;

it("test api get and post call",()=>{

    cy.request({ 
        method: 'POST',
        url: 'https://reqres.in/api/users',
        body :{
            "name": "namo modi",
            "job": "bjp leader"
        }
    }).then((response)=>{
           expect(response.status).to.eq(201);
          const id1= (response.body.id);
          cy.log(id1);
    })
})
it("get api ",()=>{
    cy.request({
        method :'GET',
        url: "https://reqres.in/api/users/",
        qs:{ id1}  
    }).then((response)=>{
        expect(response.status).to.eq(200);
        expect(response.body.id).to.eq(id1)
        let fullbody=response.body;
         cy.log(fullbody);

    })
})

})
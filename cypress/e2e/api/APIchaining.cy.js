
describe("test api chaning ", () => {
    let  expectdNAME;
    let ids;

    it("test the api chaning concept ", () => {
    cy.request(
            {
                method: "POST",
                url: "https://api.getpostman.com/workspaces",
                body:
                {
                    "workspace": {
                        "name": "India"+Math.random().toString(2).substring(2),
                        "type": "personal",
                        "description": +Math.random().toString(2).substring(2)
                    }
                },
                headers:{ 
                "Content-Type": "application/json",
                'x-api-key' :'PMAK-656fd044e9341c5845081b2d-3ec610fcc0b3c1f2e04e12f768d6bbfa23'
                 }
            }).then((postresponse)=>{
                expect(postresponse.status).to.eq(200);
              
                ids=postresponse.body.workspace.id;
                cy.log(ids);
               expectdNAME= postresponse.body.workspace.name;
               cy.log(expectdNAME);


                cy.request({

                    method:'GET',
                    url: `https://api.getpostman.com/workspaces/${ids}`,
                  
                    headers:{ 
                        'x-api-key' :'PMAK-656fd044e9341c5845081b2d-3ec610fcc0b3c1f2e04e12f768d6bbfa23'
                         }
                }).then((getresponse1)=>{
                    expect(getresponse1.status).to.eq(200);
    
               cy.log(expectdNAME);
                    expect(getresponse1.body.workspace.name).to.equal(`${expectdNAME}`)
                })
            })
            
           
        })

      
        })
    
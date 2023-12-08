let expectdNAME;
let ids
let param = ids
describe("test api chaning ", () => {
    it("test the api chaning concept ", () => {
        cy.request(
            {
                method: "POST",
                url: "https://api.getpostman.com/workspaces",
                body:
                {
                    "workspace": {
                        "name": "IndiaLOVE" + Math.random().toString(2).substring(2),
                        "type": "personal",
                        "description": +Math.random().toString(2).substring(2)
                    }
                },
                headers: {
                    "Content-Type": "application/json",
                    'x-api-key': 'PMAK-656fd044e9341c5845081b2d-3ec610fcc0b3c1f2e04e12f768d6bbfa23'
                }
            }).then((postresponse) => {
                cy.log(postresponse)
                expect(postresponse.status).to.eq(200);
                // expectdNAME = postresponse.body.name;
                ids = postresponse.body.workspace.id;
                cy.log(ids)

                cy.request({

                    method: 'GET',
                   // url: "https://api.getpostman.com/workspaces/`${ids}",
                    //url: "https://api.getpostman.com/workspaces/${ids}",
                    url: 'https://api.getpostman.com/workspaces/'+ids+ '',
                    headers: {
                        'x-api-key': 'PMAK-656fd044e9341c5845081b2d-3ec610fcc0b3c1f2e04e12f768d6bbfa23'
                    }
                }).then((getresponse1) => {
                    expect(getresponse1.status).to.eq(200);

                    //expect(getresponse1.body.workspace.name).to.eq(expectdNAME)
                })
            })


    })


})
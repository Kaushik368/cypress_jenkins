///<reference types="Cypress"/>

var id;
describe('Testing trello Api', () => {
 
    it('creating the board', () => {
        cy.request({
            method:"POST",
            url:"https://api.trello.com/1/boards/?name=Kaushik&key=0ffdccea3ed9032e6579c39d75a60cb6&token=ATTAbfd62fdf54e50daec851326a7b77e05a66322a7e39e883a14d02016116e6a5338011FF57",
            headers:{
                accept:"application/json"
            },
            
        }).then((response)=>{
            // let body =JSON.parse(JSON.stringify(response.body))
        
            expect(response.status).to.eql(200);
                // cy.log(JSON.stringify(response.body.id))
             id=response.body.id;
        })
    });

    it('updating the board', () => {
        const newName="Sunil"
        const descrip="I am learning Trello API"
        cy.request({
            method:"PUT",
            url:`https://api.trello.com/1/boards/${id}?key=0ffdccea3ed9032e6579c39d75a60cb6&token=ATTAbfd62fdf54e50daec851326a7b77e05a66322a7e39e883a14d02016116e6a5338011FF57`,
            headers:{
                accept:"application/json"
            },
            body:{
                name:newName,
                desc:descrip,
            }
            
        }).then((response)=>{
            // let body =JSON.parse(JSON.stringify(response.body))
        
            expect(response.status).to.eql(200);
            expect(response.body.name).to.eql(newName)
            expect(response.body.desc).to.eql(descrip)
                
                
        })
    });

    it('DELETE a board', () => {
        cy.request({
            method:"DELETE",
            url:`https://api.trello.com/1/boards/${id}?key=0ffdccea3ed9032e6579c39d75a60cb6&token=ATTAbfd62fdf54e50daec851326a7b77e05a66322a7e39e883a14d02016116e6a5338011FF57`,
            
            
        }).then((response)=>{
           
            expect(response.status).to.eql(200);
        })
    });
});
///<reference types="Cypress"/>

const token="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";
const baseURL="https://api.github.com";
const owner="Kaushik368";


var name="Cypress_API_testing1";
var description="This is your1 first repo!";
var updated="Cypress_API_testing_updated";
var shs;
var id;
describe('Github_api_testing', () => {
    it('1 CREATE A REPOSITORY FOR A AUTHENTICATED USER', () => {
        cy.request({
            method:"POST",
            url:`${baseURL}/user/repos`,
            headers:{
                Authorization: `Bearer ${token}`,
                accept:"application/json"
            },
            body:{
                "name":name,
                "description":description,
             }
            
        }).then((response)=>{
        
            expect(response.status).to.eql(201);
            cy.log(JSON.stringify(response.body.name))    
        })
    });

    it('2 UPDATE A REPOSITORY', () => {
        cy.request({
            method:"PATCH",
            url:`${baseURL}/repos/${owner}/${name}`,
            headers:{
                Authorization: `Bearer ${token}`,
                accept:"application/json"
            },
            body:{
                "name":updated,
                
             }
            
        }).then((response)=>{
        
            expect(response.status).to.eql(200);
            cy.log(JSON.stringify(response.body.name))   
        })
    });

    it('4 GET A REPOSITORY', () => {
        cy.request({
            method:"GET",
            url:`${baseURL}/repos/${owner}/${updated}`,
            headers:{
                Authorization: `Bearer ${token}`,
                accept:"application/json"
            },
            
            
        }).then((response)=>{
        
            expect(response.status).to.eql(200);
            cy.log(JSON.stringify(response))  
        })
    });

    it('3 DELETE A REPOSITORY', () => {
        cy.request({
            method:"DELETE",
            url:`${baseURL}/repos/${owner}/${updated}`,
            headers:{
                Authorization: `Bearer ${token}`,
                accept:"application/json"
            },
            
            
        }).then((response)=>{
        
            expect(response.status).to.eql(204);
            cy.log(JSON.stringify(response.body.name))  
        })
    });

});
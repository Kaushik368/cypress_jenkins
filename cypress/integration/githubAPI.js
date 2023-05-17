///<reference types="Cypress"/>

const token="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";
const baseURL="https://api.github.com";
const owner="Kaushik368";


var name="Cypress_API_testing";
var description="This is your first repo!";
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

    it('10 CREATE FILE CONTENT', () => {
        cy.request({
            method:"PUT",
            url:`${baseURL}/repos/${owner}/${updated}/contents/javaScript.js`,
            headers:{
                Authorization: `Bearer ${token}`,
                accept:"application/json"
            },
            body:{
                "message":"my commit message",
                "content":"SGVsbG8gbmV3IEZpbGUgQ3JlYXRlZA=="
            }
            
            
        }).then((response)=>{
        
            expect(response.status).to.eql(201);
            cy.log(JSON.stringify(response))  
            shs=response.body.content.sha;
            cy.log(JSON.stringify(shs))
        })
    });

    it('5 CREATE A FORK', () => {
        cy.request({
            method:"POST",
            url:`${baseURL}/repos/${owner}/${updated}/forks`,
            headers:{
                Authorization: `Bearer ${token}`,
                accept:"application/json"
            },
            body:{
                "organization":"Kaushiik-org-project-postman",
                "name":"new_fork456",
                "default_branch_only":true
                
            }
            
            
        }).then((response)=>{
        
            expect(response.status).to.eql(202);
            cy.log(JSON.stringify(response))  
        })
    });

    it('6 LIST FORKS', () => {
        cy.request({
            method:"GET",
            url:`${baseURL}/repos/${owner}/${updated}/forks`,
            headers:{
                Authorization: `Bearer ${token}`,
                accept:"application/json"
            },
           
            
            
        }).then((response)=>{
        
            expect(response.status).to.eql(200);
            cy.log(JSON.stringify(response))  
        })
    });

    it('7 LIST REPOSITORIES FOR A USER', () => {
        cy.request({
            method:"GET",
            url:`${baseURL}/users/${owner}/repos`,
            headers:{
                Authorization: `Bearer ${token}`,
                accept:"application/json"
            },
           
            
            
        }).then((response)=>{
        
            expect(response.status).to.eql(200);
            cy.log(JSON.stringify(response))  
        })
    });

    it('8 LIST REPOSITORY LANGUAGE', () => {
        cy.request({
            method:"GET",
            url:`${baseURL}/repos/${owner}/${updated}/languages`,
            headers:{
                Authorization: `Bearer ${token}`,
                accept:"application/json"
            },
           
            
            
        }).then((response)=>{
        
            expect(response.status).to.eql(200);
            cy.log(JSON.stringify(response.body))  
        })
    });

    it('9 LIST PUBLIC REPOSITORIES', () => {
        cy.request({
            method:"GET",
            url:`${baseURL}/repositories`,
            headers:{
                Authorization: `Bearer ${token}`,
                accept:"application/json"
            },
           
            
            
        }).then((response)=>{
        
            expect(response.status).to.eql(200);
            cy.log(JSON.stringify(response))  
        })
    });

    it('20 CREATE A RELEASE', () => {
        cy.request({
            method:"POST",
            url:`${baseURL}/repos/${owner}/${updated}/releases`,
            headers:{
                Authorization: `Bearer ${token}`,
                accept:"application/json"
            },
            body:{
                "tag_name": "Git_release_tag"
            }
            
            
        }).then((response)=>{
        
            expect(response.status).to.eql(201);
            cy.log(JSON.stringify(response))
        })
    });

    it('12 LIST REPOSITORY TAGS', () => {
        cy.request({
            method:"GET",
            url:`${baseURL}/repos/${owner}/${updated}/tags`,
            headers:{
                Authorization: `Bearer ${token}`,
                accept:"application/json"
            },
           
            
            
        }).then((response)=>{
        
            expect(response.status).to.eql(200);
            cy.log(JSON.stringify(response.body))  
        })
    });

    it('13 CREATE AN AUTOLINK REFERENCE FOR A REPOSITORY', () => {
        cy.request({
            method:"POST",
            url:`${baseURL}/repos/${owner}/${updated}/autolinks`,
            headers:{
                Authorization: `Bearer ${token}`,
                accept:"application/json"
            },
            body:{
                "key_prefix": "API",
              "url_template": "https://example.com/API?query=<num>"
             
            }
            
            
        }).then((response)=>{
        
            expect(response.status).to.eql(201);
            cy.log(JSON.stringify(response.body))
            id=response.body.id;
            cy.log(JSON.stringify(id))
        })
    });

    it('15 GET AN AUTOLINK REFERENCE FOR A REPOSITORY', () => {
        cy.request({
            method:"GET",
            url:`${baseURL}/repos/${owner}/${updated}/autolinks/${id}`,
            headers:{
                Authorization: `Bearer ${token}`,
                accept:"application/json"
            },
            
            
            
        }).then((response)=>{
        
            expect(response.status).to.eql(200);
            cy.log(JSON.stringify(response.body))
            
        })
    });

    it('17 GET A REPOSITORY', () => {
        cy.request({
            method:"GET",
            url:`${baseURL}/repos/${owner}/${updated}`,
            headers:{
                Authorization: `Bearer ${token}`,
                accept:"application/json"
            },
            
            
        }).then((response)=>{
        
            expect(response.status).to.eql(200);
            cy.log(JSON.stringify(response.body))  
        })
    });

    it('18 REPLACE ALL REPOSITORY TOPICS', () => {
        cy.request({
            method:"PUT",
            url:`${baseURL}/repos/${owner}/${updated}/topics`,
            headers:{
                Authorization: `Bearer ${token}`,
                accept:"application/json"
            },
            body:{
                "names": [
                "octocat",
                "atom",
                "electron",
                "api"
              ]
            }
            
            
        }).then((response)=>{
        
            expect(response.status).to.eql(200);
            cy.log(JSON.stringify(response.body.names))  
           
        })
    });

    it('14 GET ALL REPOSITORY TOPICS', () => {
        cy.request({
            method:"GET",
            url:`${baseURL}/repos/${owner}/${updated}/topics`,
            headers:{
                Authorization: `Bearer ${token}`,
                accept:"application/json"
            },
            
            
        }).then((response)=>{
        
            expect(response.status).to.eql(200);
            cy.log(JSON.stringify(response.body.names))  
           
        })
    });



    it('19 DELETE FORK', () => {
        cy.request({
            method:"DELETE",
            url:`${baseURL}/repos/Kaushiik-org-project-postman/new_fork456`,
            headers:{
                Authorization: `Bearer ${token}`,
                accept:"application/json"
            },
           
            
            
        }).then((response)=>{
        
            expect(response.status).to.eql(204);
            cy.log(JSON.stringify(response))  
        })
    });

    it('16 DELETE FROM AN AUTOLINK REFERENCE FOR A REPOSITORY', () => {
        cy.request({
            method:"DELETE",
            url:`${baseURL}/repos/${owner}/${updated}/autolinks/${id}`,
            headers:{
                Authorization: `Bearer ${token}`,
                accept:"application/json"
            },
            body:{
                    "autolink_id": id, 
            }
            
        }).then((response)=>{
        
            expect(response.status).to.eql(204);
            cy.log(JSON.stringify(response.body))
            
        })
    });

    it('11 DELETE A FILE', () => {
        cy.request({
            method:"DELETE",
            url:`${baseURL}/repos/${owner}/${updated}/contents/javaScript.js`,
            headers:{
                Authorization: `Bearer ${token}`,
                accept:"application/json"
            },
            body:{
                "message":"File Deleted",
                "sha":shs,
            }
            
            
        }).then((response)=>{
        
            expect(response.status).to.eql(200);
            cy.log(JSON.stringify(response.body.name))  
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
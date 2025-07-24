import conf from "../conf/conf";

import {Client,ID,Databases,Storage,Query} from 'appwrite';

export class Service{
    client =new Client();
    databases;
    bucket;//storage
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client)
    }

    async createPost(title,slug,contect,featuredImage,status,userId){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,//document id
                {
                    title,
                    contect,
                    featuredImage,
                    status,
                    userId
                }            
            )
            
        } catch (error) {
            console.log("Appwrite service :: createPost :: error",error);
            
        }

    }

    async updatePost(slug,{title,contect,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    contect,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
             console.log("Appwrite service :: updatePost :: error",error);
        }

    }
    async deletePost(slug){
        try {
             await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
               console.log("Appwrite service :: DeletePost :: error",error);
               return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                 conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            
        } catch (error) {
             console.log("Appwrite service :: GetPost :: error",error);
               return false
        }
    }

    async getPosts(quries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                 conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                quries
            )
            
        } catch (error) {
             console.log("Appwrite service :: GetPosts :: error",error);
               return false
        }
    }

    //file upload services

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: UploadFile :: error",error);
               return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
            
        } catch (error) {
            console.log("Appwrite service :: DeleteFile :: error",error);
               return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId
            )        
    }
}


const service=new Service()

export default service;
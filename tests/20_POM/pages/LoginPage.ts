import {Page, Locator,expect } from '@playwright/test'

export class LoginPage{

    readonly page : Page;
    readonly username : Locator;
    readonly password : Locator;
    readonly loginBtn : Locator;

    constructor(page:Page){
        this.page = page;
        this.username = page.getByRole('textbox',{name:'Username'});
        this.password = page.getByRole('textbox',{name:'Password'});
        this.loginBtn = page.getByRole('button',{name:'Login'});
    }

    async goto(){
        await this.page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
    }

    async login(user:string,pass:string){
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginBtn.click();
    }

}
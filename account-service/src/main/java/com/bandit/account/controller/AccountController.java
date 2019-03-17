package com.bandit.account.controller;

import org.springframework.web.bind.annotation.*;

@RestController
public class AccountController {
    @RequestMapping(path = "/ping", method = RequestMethod.GET)
    public String ping() {
        return "OK";
    }
}
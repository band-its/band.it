package com.bandit.config;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ConfigApplicationTests {
    @Test
    public void contextLoads() {
    }

    @Test
    public void a2plus2is4() {
        Assert.assertEquals(4, ConfigApplication.sum(2, 2));
    }
}

package com.bandit.account.service;

import com.bandit.account.client.AuthServiceClient;
import com.bandit.account.domain.Account;
import com.bandit.account.domain.User;
import com.bandit.account.repository.AccountRepository;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.MockitoAnnotations.initMocks;


public class AccountServiceTest {

    @InjectMocks
    private AccountService accountService;

    @Mock
    private AuthServiceClient authClient;

    @Mock
    private AccountRepository accountRepository;

    @Before
    public void setup() {
        initMocks(this);
    }

    @Test
    public void shouldCreateAccountWithGivenUser() {
        User user = new User();
        user.setUsername("test");

        Account account = accountService.create(user);

        assertEquals(user.getUsername(), account.getName());

        verify(authClient, times(1)).createUser(user);
        verify(accountRepository, times(1)).save(account);
    }
}
package com.example.weblab3.management;

import jakarta.annotation.PostConstruct;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.context.Initialized;
import jakarta.enterprise.event.Observes;
import jakarta.inject.Inject;
import jakarta.inject.Named;

import javax.management.MBeanServer;
import javax.management.ObjectName;
import java.lang.management.ManagementFactory;

@Named
@ApplicationScoped
public class Agent {

    @Inject
    private Register register;

    @PostConstruct
    public void initAgent() {
        MBeanServer mbs = ManagementFactory.getPlatformMBeanServer();

        ObjectName mBean;

        try {
            mBean = new ObjectName("com.example.weblab3.management:type=Register");
            if (!mbs.isRegistered(mBean)) {
                mbs.registerMBean(register, mBean);
            }
        } catch(Exception e) {
            e.printStackTrace();
        }
    }

    public void logSimpleAgentStarted() {
        System.out.println("SimpleAgent.logSimpleAgentStarted");
    }

    public void startup(@Observes @Initialized(ApplicationScoped.class) Object context) {
        Agent a = new Agent();
        a.logSimpleAgentStarted();
    }
}

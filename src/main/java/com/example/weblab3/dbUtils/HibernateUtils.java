package com.example.weblab3.dbUtils;

import com.example.weblab3.beans.AreaCheckerBean;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.AvailableSettings;
import org.hibernate.cfg.Configuration;

public class HibernateUtils {
    private static final SessionFactory factory;

    static {
        try {
            Configuration configuration = new Configuration();
            configuration.configure();
            configuration.setProperty(AvailableSettings.USER, "");
            configuration.setProperty(AvailableSettings.PASS, "");
            configuration.addAnnotatedClass(AreaCheckerBean.class);
            factory = configuration
                    .buildSessionFactory();
        } catch (Throwable ex) {
            System.err.println("Hibernate is not initialized: " + ex);
            throw new ExceptionInInitializerError();
        }
    }

    public static SessionFactory getFactory() {
        return factory;
    }
}
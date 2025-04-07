package com.mycompany.app;
import java.lang.Exception;
import io.sentry.Sentry;


public class App {
    static {
        Sentry.init(options -> {
            options.setDsn("");
            options.setDebug(true);
        });
    }

    public static void main(String[] args) {
        try {
            throw new Exception("This is exception");
        } catch (Exception e) {
            try {
                Sentry.captureException(e);
                Thread.sleep(1000);
            } catch (InterruptedException ie) {
                // Ignore
            }
        }
    }
}


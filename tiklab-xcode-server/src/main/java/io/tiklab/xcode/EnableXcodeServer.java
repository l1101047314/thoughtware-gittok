package io.tiklab.xcode;

import org.springframework.context.annotation.Import;

import java.lang.annotation.*;

@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Import({XcodeServerAutoConfiguration.class})
public @interface EnableXcodeServer {
}
package myplugin;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan(basePackages = { "myplugin" })
public class MyPluginConfiguration {
}

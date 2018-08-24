package myplugin;

import org.pf4j.PluginWrapper;

import welink.plugin.core.WelinkPlugin;

public class MyPlugin extends WelinkPlugin {

	public MyPlugin(PluginWrapper wrapper) {
		super(wrapper);
	}

	@Override
	public Class<?> getConfigurationBeanClass() {
		return MyPluginConfiguration.class;
	}
}

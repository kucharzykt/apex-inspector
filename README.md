
  <div align="center">
<h1> 🔎Inspector </h1>
</div>


## What is Inspector

Inspector is a lightweight dynamic action plugin for Oracle Application Express that adds inspect button for regions and buttons. Inspect button opens card with informations like static id, types, querries, processes and others.
<div style="float: left">
  <p align="center">
  <img src="others/inspector_closed.png" width="800" />
</p>
</div>

<div style="float: left">
  <p align="center">
  <img src="others/inspector_opened.png" width="800" />
</p>
</div>


### Supported objects

Object | Basic info | Processes | Dynamic actions
------------ | ------------- | ------------- | -------------
Region | ✅ | 🚧 | 🚧
Button | 🚧 | 🚧 | 🚧
... | | |


### Installation⚙️

1. **Download** the plugin 
2. **Import** file dynamic_action_plugin_apex_inspector.sql into your application
3. **Add dynamic action** with type "Inspector", recommended use is page load dynamic action on page 0 (affect all the pages)


## Issues
You can find issues [here](https://github.com/kucharzykt/apex-inspector/issues)


## License 📝

Licensed under the [MIT](LICENSE).
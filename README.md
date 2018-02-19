# Add CDNs
[OrgChart Library](https://github.com/dabeng/OrgChart)

add the CDNs in the `src/index.html` file

CSS file
- [OrgChart jQuery CSS](https://rawgit.com/dabeng/OrgChart/master/demo/css/jquery.orgchart.css)

javascript files
- [jQuery](http://code.jquery.com/jquery-3.3.1.min.js)
- [OrgChart jQuery](https://rawgit.com/dabeng/OrgChart/master/demo/js/jquery.orgchart.js)

# Declare jQuery

use the `declare var` keyword to get the jQuery global function inside a component

>put it at the top below the imports
```typescript
  declare var $: any;
```

in the ngOnInit method add jQuery on ready and start use the OrgChart.
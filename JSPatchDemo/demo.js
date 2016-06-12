defineClass('ViewController', {
    tableView_numberOfRowsInSection: function(tableView, section) {
    return 10;
    },
       
    viewDidLoad: function(){
            
        self.super().viewDidLoad();
            
        var temColor = require('UIColor').yellowColor();
        var table = require('UITableView').alloc().initWithFrame(self.view().bounds());
            
        table.setBackgroundColor(temColor);
        self.setTableView(table);
        self.tableView().setDelegate(self);
        self.tableView().setDataSource(self);
        
        self.view().addSubview(self.tableView());
    
    }
})


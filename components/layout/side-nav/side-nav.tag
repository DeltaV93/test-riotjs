<side-nav>
<div id="add-note-panel">
  <div style="padding:10px;">
  <form>
    <h2>Create Note</h2>
    <label>Note Title</label>
    <input type="text" class="form-control" name="note-title">
    <label>Note Type</label>
    <select id="note-type" class="form-control"></select>
    <label>Note</label>
    <textarea class="form-control"></textarea>
    <div class="row" style="margin-top:30px;">
        <div class="col-xs-6">
          <button type="button" id="note-cancel-btn" class="btn btn-default btn-block">Cancel</button>
        </div>
        <div class="col-xs-6">
          <button type="button" class="btn btn-primary btn-block">Save</button>
        </div>
    </div>
  </form>
  </div>
</div>

<div id="nav-panel">
  <div class="bs-example" data-example-id="simple-nav-stacked"> 
    <ul class="nav nav-pills nav-stacked nav-pills-stacked-example"> 
      <li role="presentation" class="active"><a href="#">Home</a></li> 
      <li role="presentation"><a href="#">Profile</a></li> 
      <li role="presentation"><a href="#">Messages</a></li> 
    </ul> 
  </div>     
</div>


<script>

            $("#add-note-panel").jqSlideOutPanel("open");
            
            $("#add-note-btn").on("click",function() {
              $("#add-note-panel").jqSlideOutPanel("open");
            });

            $("#note-cancel-btn").on("click",function() {
              $("#add-note-panel").jqSlideOutPanel("close");
            });

            //initialize left panel
            $('#nav-panel').jqSlideOutPanel({
              position:"left",
              width:"200px",
              action:"push"
            });

            //initialize right panel
            $('#add-note-panel').jqSlideOutPanel({
              position:"right",
              action:"overlay",
              showToggle:false,
              showCloseIcon:true,
              sliderClosedCallback: function () {
                alert("Panel Closed")
              },
              sliderOpenedCallback: function () {
                alert("Panel Opened")
              }
            });  
</script>
</side-nav>
<header>
    <div class="container-fluid">
        <button id="add-diff-button" class="btn btn-default pull-right" type="button">
            <i class="fa fa-flag"></i><span class="hidden-xs"> report abuse</span>
        </button>
        <button id="report-abuse-button" class="btn btn-default pull-right" type="button">
            <i class="fa fa-plus-circle"></i><span class="hidden-xs"> add diff</span>
        </button>
        <form action="/diff" method="GET">
            <div class="input-group">
                <input type="search" name="url" class="form-control"
                       value="{$url}"/>
                <span class="input-group-btn">
                    <button class="btn btn-default" type="submit">
                        <i class="fa fa-gavel"></i><span class="hidden-xs"> diff</span>
                    </button>
                </span>
            </div><!-- .input-group -->
        </form>
    </div>
</header>
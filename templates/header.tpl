<header>
    <div class="container">
        <div class="row">
            <div class="col-sm-6 col-xs-3">
                <h1>diff</h1>
            </div>
            <div class="col-sm-6 col-xs-9">
                <form action="/diff" method="GET">
                    <div class="input-group">
                        <input type="search" name="link" class="form-control"
                               value="{$link}"/>
                        <span class="input-group-btn">
                            <button class="btn btn-default" type="submit">diff</button>
                        </span>
                    </div><!-- .input-group -->
                </form>
            </div>
        </div>
    </div>
</header>
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>diff - listen to more voices</title>
        <meta name=viewport content="width=device-width, initial-scale=1">
        {include file='load-global-css.tpl'}
    </head>
    <body>
        <div id="diffbox">
            <h1>diff</h1>

            <form action="/diff" method="GET">
                <div class="input-group">
                    <input type="search" name="url" class="form-control">
                    <span class="input-group-btn">
                        <button class="btn btn-default" type="submit">diff</button>
                    </span>
                </div><!-- .input-group -->
            </form>
        </div><!-- #diffbox -->

        {include file='load-global-js.tpl'}
    </body>
</html>
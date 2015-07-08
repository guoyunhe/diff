<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>{$url} - diff</title>
        <meta name=viewport content="width=device-width, initial-scale=1">
        {include file='load-global-css.tpl'}
    </head>
    <body>
        {include file='header.tpl'}

        {include file='list.tpl'}

        {include file='graph.tpl'}

        <div id="graph-list-switch" class="btn-group  btn-group-justified visible-xs-block"
             role="group" aria-label="..." data-toggle="buttons">
            <label id="graph-button" class="btn btn-primary active">
                <input type="radio" autocomplete="off" checked>
                <i class="fa fa-sitemap"></i>
            </label>
            <label id="list-button" class="btn btn-primary">
                <input type="radio" autocomplete="off">
                <i class="fa fa-list"></i>
            </label>
        </div>

        {include file='templates.tpl'}

        {include file='load-global-js.tpl'}
    </body>
</html>
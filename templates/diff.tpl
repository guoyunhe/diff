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

        <div id="graph">
            <div id="master-link" class="link master">
                <div class="wrap">
                    <a href="{$url}" target="_blank">{$url}</a>
                    <br>
                    <i class="fa fa-exclamation-circle"></i>
                    <i class="fa fa-heart"></i>
                </div>
            </div>
            {foreach $differences as $difference}
                <div class="link servant">
                    <div class="wrap">
                        <a href="{$difference.url}">{$difference.url}</a>
                        <br>
                        <i class="fa fa-exclamation-circle"></i>
                        <i class="fa fa-heart"></i>
                    </div>
                </div>
            {/foreach}
        </div>

        {include file='load-global-js.tpl'}
    </body>
</html>
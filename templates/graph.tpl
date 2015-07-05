<div id="graph">
    <div id="master-link" class="link master">
        <div class="wrap">
            <a href="{$url}" target="_blank">{$url}</a>
        </div>
    </div>
    {foreach $differences as $difference}
        <div id="link-{$difference.id}-graph" class="link servant">
            <div class="wrap">
                <a href="{$difference.url}" target="_blank">{$difference.url}</a>
            </div>
        </div>
    {/foreach}
</div>
<div id="graph" class="active">
    <div class="inner">
        {foreach $differences as $difference}
            <div id="link-{$difference.id}-graph" class="link"
                 data-link-id="{$difference.id}">
            </div>
        {/foreach}
    </div>
</div>
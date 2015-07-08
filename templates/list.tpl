<div id="list">
    <div class="inner">
        {foreach $differences as $difference}
            <div id="link-{$difference.id}-list" class="link"
                 data-link-id="{$difference.id}">
                <div class="id">{$difference.id}</div>
                <div class="title">{$difference.title}</div>
                <div class="url">
                    <a href="{$difference.url}" target="_blank">{$difference.url}</a>
                </div>
                <div class="meta clearfix">
                    <span class="rating" href="#">
                        <i class="fa fa-bar-chart"></i> rating
                    </span>
                    <span class="diff" href="#">
                        <i class="fa fa-gavel"></i> diff
                    </span>
                    <span class="report-abuse" href="#">
                        <i class="fa fa-flag"></i> report
                    </span>
                </div>
            </div>
        {/foreach}
    </div>
</div>
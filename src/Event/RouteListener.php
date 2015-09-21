<?php

namespace Bixie\Portfolio\Event;

use Pagekit\Application as App;
use Bixie\Portfolio\UrlResolver;
use Pagekit\Event\EventSubscriberInterface;

class RouteListener implements EventSubscriberInterface
{

    /**
     * Registers permalink route alias.
     */
    public function onConfigureRoute($event, $route)
    {
        if ($route->getName() == '@portfolio/id') {
            App::routes()->alias(dirname($route->getPath()).'/{slug}', '@portfolio/id', ['_resolver' => 'Bixie\Portfolio\UrlResolver']);
        }
    }

    /**
     * Clears resolver cache.
     */
    public function clearCache()
    {
        App::cache()->delete(UrlResolver::CACHE_KEY);
    }

    /**
     * {@inheritdoc}
     */
    public function subscribe()
    {
        return [
            'route.configure' => 'onConfigureRoute',
            'model.project.saved' => 'clearCache',
            'model.project.deleted' => 'clearCache'
        ];
    }
}

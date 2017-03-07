<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit98dc472bdb9f8e865e0c4e2d7840f3db
{
    public static $prefixLengthsPsr4 = array (
        'B' => 
        array (
            'Braintree\\' => 10,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Braintree\\' => 
        array (
            0 => __DIR__ . '/..' . '/braintree/braintree_php/lib/Braintree',
        ),
    );

    public static $prefixesPsr0 = array (
        'B' => 
        array (
            'Braintree' => 
            array (
                0 => __DIR__ . '/..' . '/braintree/braintree_php/lib',
            ),
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit98dc472bdb9f8e865e0c4e2d7840f3db::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit98dc472bdb9f8e865e0c4e2d7840f3db::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInit98dc472bdb9f8e865e0c4e2d7840f3db::$prefixesPsr0;

        }, null, ClassLoader::class);
    }
}

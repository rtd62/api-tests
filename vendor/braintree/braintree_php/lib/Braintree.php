<?php
/**
 * Braintree PHP Library
 * Creates class_aliases for old class names replaced by PSR-4 Namespaces
 *
 * @copyright  2015 Braintree, a division of PayPal, Inc.
 */

require_once(__DIR__ . DIRECTORY_SEPARATOR . 'autoload.php');

if (version_compare(PHP_VERSION, '5.4.0', '<')) {
    throw new Braintree_Exception('PHP version >= 5.4.0 required');
}

Braintree_Configuration::environment('sandbox');
Braintree_Configuration::merchantId('wytjqdykwy6f58xh');
Braintree_Configuration::publicKey('szxp49sq8cshvrq6');
Braintree_Configuration::privateKey('87f90788c3a951598efb7ee7e0ef99db');

function requireDependencies() {
    $requiredExtensions = ['xmlwriter', 'openssl', 'dom', 'hash', 'curl'];
    foreach ($requiredExtensions AS $ext) {
        if (!extension_loaded($ext)) {
            throw new Braintree_Exception('The Braintree library requires the ' . $ext . ' extension.');
        }
    }
}

requireDependencies();

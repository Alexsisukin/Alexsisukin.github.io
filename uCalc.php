<?php
/**
 * @author     uKit Group <support@ucalc.pro>
 * @date       19/09/2017
 * @copyright  Copyright (C) 2016 - 2017 uCalc.pro . All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 */
defined('_JEXEC') or die;


class PlgButtonuCalc extends JPlugin
{
    /**
     * Load the language file on instantiation.
     *
     * @var    boolean
     * @since  3.7.0
     */
    protected $autoloadLanguage = true;

    /**
     * Display the button
     *
     * @param   string $name The name of the button to add
     *
     * @return  JObject  The button options as JObject
     *
     * @since   3.7.0
     */
    public $uCalc_content_lang;
    public $app;

    public function onDisplay($name)
    {
        $user = JFactory::getUser();
        if (!$this->uCalcPluginCheck()) {
            return;
        }
        $this->app = JFactory::getApplication();
        $this->uCalc_content_lang = JFactory::getLanguage();
        $this->uCalc_content_lang->load('plg_content_uCalc.sys', JPATH_PLUGINS . '/content/uCalc', null, true);
        $this->article_front();
        if ($user->authorise('core.create', 'com_contact')
            || $user->authorise('core.edit', 'com_contact')
            || $user->authorise('core.edit.own', 'com_contact')) {
            $link = 'index.php?option=com_ajax&amp;plugin=uCalc&amp;format=html&amp;group=content&amp;method=AllCalc';

            $button = new JObject;
            $button->modal = true;
            $button->class = 'btn';
            $button->link = $link;
            $button->text = JText::_('uCalc');
            $button->name = 'mce-i-ucalc-ico';
            $button->options = "{handler: 'iframe', size: {x: 400, y: 100}}";

            $document = JFactory::getDocument();
            $style = '.icon-mce-i-ucalc-ico {' .
                'background: url(https://ucalc.pro/favicon.png) no-repeat center !important;' .
                'background-size: 16px !important;' .
                'padding-top: 1px;' .
                '} ';
            $document->addStyleDeclaration($style);
            return $button;
        }
    }

    private function uCalcPluginCheck()
    {
        $db = JFactory::getDBO();

        $sql = 'SELECT extension_id, params FROM #__extensions 
                         WHERE folder ="' . $db->escape('content') . '" AND
                         element ="' . $db->escape('uCalc') . '" AND enabled LIKE "1"';

        $db->setQuery($sql);
        $plg = $db->loadObject();
        return (!is_null($plg)) ? true : false;
    }

    private function getLang()
    {
        $out = array();
        $locale = $this->uCalc_content_lang->getTag();
        $all_files = $this->uCalc_content_lang->getPaths('plg_content_uCalc.sys');

        $file = key($all_files);
        foreach ($all_files as $lang_file => $connect) {
            $pattern = preg_quote($locale);
            if (preg_match('~' . $pattern . '~iu', $lang_file)) {
                $file = $lang_file;
                break;
            }
        }
        $lang = parse_ini_file($file);
        $locale = $this->uCalc_content_lang->getTag();
        if (preg_match('~-~iu', $locale)) {
            $locale = explode('-', $locale);
            $locale = $locale['0'];
        } else {
            $locale = 'en';
        }
        $out['lang'] = $lang;
        $out['thisLang'] = $locale;
        $out['connect'] = 1;

        $document = JFactory::getDocument();
        $document->addScriptDeclaration('
        var uCalcPlugin = ' . json_encode($out) . ' ;
        ');
    }

    public function article_front()
    {
        if ($this->IsInsertFrondButtons()) {
            $document = JFactory::getDocument();
            $document->addStyleSheet('/plugins/content/uCalc/assets/css/edit_button.css');
            $document->addScript( '/plugins/content/uCalc/assets/js/edit_button.js');
        }
    }

    private function IsInsertFrondButtons()
    {
        $aticle = $this->is_article();
        $module_admin = $this->is_module_edit_admin();
        $module_client = $this->is_module_edit_client();
        $k2 = $this->is_k2();
        if ($aticle || $module_admin || $module_client || $k2) {
            $this->getLang();
            return true;
        }
        return false;
    }
    public function is_article()
    {
        if ($this->app->input->getMethod() === 'GET') {
            if ($this->app->input->getCmd('option') === 'com_content' &&
                ($this->app->input->getCmd('view') === 'article' ||
                    $this->app->input->getCmd('view') === 'form') &&
                $this->app->input->getCmd('layout') === 'edit'
            ) {

                return true;
            }
        }

        return false;
    }
    public function is_module_edit_admin()
    {
        if ($this->app->input->getMethod() === 'GET') {
            if ($this->app->input->getCmd('option') === 'com_modules' &&
                $this->app->input->getCmd('view') === 'module' &&
                $this->app->input->getCmd('layout') === 'edit'
            ) {

                return true;
            }
        }

        return false;
    }
    public function is_module_edit_client()
    {
        if ($this->app->input->getMethod() === 'GET') {
            if ($this->app->input->getCmd('option') === 'com_config' &&
                $this->app->input->getCmd('controller') === 'config.display.modules'
            ) {
                return true;
            }
        }

        return false;
    }

    public function is_k2()
    {
        if ($this->app->input->getMethod() === 'GET') {
            if ($this->app->input->getCmd('option') === 'com_k2' &&
                $this->app->input->getCmd('view') === 'item'
            ) {
                return true;
            }
        }

        return false;
    }


}

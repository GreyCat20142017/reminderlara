<?php

    namespace App\Helpers;


    /**
     * Class Helper - набор статических методов для реализации различных вспомогательных функций
     */
    class Helper
    {
        public static function getWrapped (String $str){
            return '"' . $str . '"';
        }

    }

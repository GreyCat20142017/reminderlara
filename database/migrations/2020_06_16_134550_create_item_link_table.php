<?php

    use Illuminate\Support\Facades\Schema;
    use Illuminate\Database\Schema\Blueprint;
    use Illuminate\Database\Migrations\Migration;

    class CreateItemLinkTable extends Migration {
        /**
         * Run the migrations.
         *
         * @return void
         */
        public function up() {
            Schema::create('item_link', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->bigInteger('item_id')->unsigned()->index();
                $table->bigInteger('link_id')->unsigned()->index();
                $table->foreign('item_id')->references('id')->on('items')->onDelete('cascade');
                $table->foreign('link_id')->references('id')->on('links')->onDelete('cascade');
                $table->timestamps();
            });
        }

        /**
         * Reverse the migrations.
         *
         * @return void
         */
        public function down() {
            Schema::dropIfExists('item_link');
        }
    }



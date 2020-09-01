import { Controller, Res, Post, Body, HttpStatus, Bind, Get, Param, HttpException, Query, Delete, Put } from '@nestjs/common';
import { CreateProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';
import { Product } from './interfaces/product.interface';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  /* Este Codigo esta Basado JavaScript
    @Post()
    async createPost(@Res() res, @Body() createProductDTO: CreateProductDTO ): Promise<Product[]> {
        const product = await this.productService.createProduct(createProductDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Producto Creado',
            product
        });
      } */

  @Post()
  @Bind(Res(), Body())
  async createPost(@Res() res, @Body() createProductDTO: CreateProductDTO): Promise<Product[]> {
    const product = await this.productService.createProduct(createProductDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Producto Creado !!!',
      product,
    });
  }

  /* @Get() Este Codigo esta Basado JavaScript
      async getProducts(@Res() res): Promise<Product[]> {
          const products = await this.productService.getProducts();
          return res.status(HttpStatus.OK).json({
              products
          });
      } */

  @Get()
  @Bind(Res())
  async getProducts(@Res() res): Promise<Product[]> {
    const products = await this.productService.getProducts();
    return res.status(HttpStatus.OK).json({
        products
    });
  }

  @Get('/:productID')
  async getProduct(@Res() res, @Param('productID') productID): Promise<Product> {
      try {
        const product = await this.productService.getProduct(productID);
        return res.status(HttpStatus.OK).json(product);
      } catch (error) {
        throw new HttpException('El Producto No Esta Registrado !!!', HttpStatus.FORBIDDEN);
      }
    }

    @Delete('/delete')
    async deleteProduct(@Res() res, @Query('productId') productId) {
        try {
            const productDeleted = await this.productService.deleteProduct(productId);
            return res.status(HttpStatus.OK).json({
                message: 'El Producto Fue Eliminado Correctamente !!!',
                productDeleted
            });
          } catch (error) {
            throw new HttpException('El Producto No Pudo Ser Eliminado !!!', HttpStatus.FORBIDDEN);
          }
    }

    @Put('/update')
    async updateProduct(@Res() res, @Body() createProductDTO: CreateProductDTO, @Query('productId') productId) {
        try {
            const productUpdate = await this.productService.updateProduct(productId, createProductDTO);
            return res.status(HttpStatus.OK).json({
                message: 'Producto Actualizado Correctamente !!!',
                productUpdate
            });
          } catch (error) {
            throw new HttpException('El Producto No Pudo Ser Actualizado !!!', HttpStatus.FORBIDDEN);
          }
    }
}

import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDTO } from './dto/product.dto';
import { Product } from './interfaces/product.interface'

@Injectable()
export class ProductService {
  constructor(@InjectModel('Product') private productModel: Model<Product>) {}

  async getProducts(): Promise<Product[]> {
    const products = await this.productModel.find()
     return products;
  }

  async getProduct(productId: string): Promise<Product> {
      const product = await this.productModel.findById(productId);
      return product; 
  } 


  async createProduct(createProductDto: CreateProductDTO): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto);
    return await createdProduct.save();
  }

  async deleteProduct(productId: string): Promise<Product> {
      const deletedProduct = await this.productModel.findByIdAndDelete(productId);
      return deletedProduct;
  }

  async updateProduct(productId: string, createProductDto: CreateProductDTO): Promise<Product> {
       const updateProduct = await this.productModel.findByIdAndUpdate(
                             productId, createProductDto, {new: true, useFindAndModify: false});
       return updateProduct;
  }
}
